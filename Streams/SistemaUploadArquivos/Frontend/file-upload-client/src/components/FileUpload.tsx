import React, { useState, useCallback, useRef, FC } from "react";
import { FileUploadState, UploadResponse } from "../types/upload.types";

type UploadType = "file" | "audio" | "video";

const FileUpload: FC = () => {
  const [uploadType, setUploadType] = useState<UploadType>("file");
  const [uploadState, setUploadState] = useState<FileUploadState>({
    file: null,
    status: "",
    progress: 0,
  });
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [mediaUrl, setMediaUrl] = useState<string | null>(null);
  const [duration, setDuration] = useState<string>("");
  const mediaRef = useRef<HTMLVideoElement | HTMLAudioElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      if (file.size > 100 * 1024 * 1024) {
        // 100MB limit
        setUploadState((prev) => ({
          ...prev,
          status: "Arquivo muito grande. Limite de 100MB.",
        }));
        return;
      }

      setUploadState({
        ...uploadState,
        file,
        status: "Arquivo selecionado",
      });

      if (file.type.startsWith("video/") || file.type.startsWith("audio/")) {
        const url = URL.createObjectURL(file);
        setAudioUrl(url);
      } else {
        setAudioUrl(null);
      }
    }
  };

  const handleUpload = useCallback(async () => {
    if (!uploadState.file) {
      setUploadState((prev) => ({
        ...prev,
        status: "Por favor, selecione um arquivo",
      }));
      return;
    }

    const formData = new FormData();
    formData.append("file", uploadState.file);

    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = (event) => {
      const progress = (event.loaded / event.total) * 100;
      setUploadState((prev) => ({
        ...prev,
        progress,
        status: `Enviando: ${Math.round(progress)}%`,
      }));
    };

    xhr.onload = () => {
      if (xhr.status === 201) {
        const response: UploadResponse = JSON.parse(xhr.response);
        setUploadState((prev) => ({
          ...prev,
          status: response.message,
          progress: 100,
        }));
        // Limpar o preview após upload bem-sucedido
        setAudioUrl(null);
      } else {
        setUploadState((prev) => ({
          ...prev,
          status: "Erro ao enviar arquivo",
          progress: 0,
        }));
      }
    };

    xhr.onerror = () => {
      setUploadState((prev) => ({
        ...prev,
        status: "Erro na conexão",
        progress: 0,
      }));
    };

    const endpoint = `http://localhost:3000/upload/${uploadType}`;

    xhr.open("POST", endpoint);
    xhr.send(formData);
  }, [uploadState.file, uploadType]);

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds % 60);
    return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  const handleLoadedMetaData = () => {
    if (mediaRef.current) {
      const durationStr = formatDuration(mediaRef.current.duration);
      setDuration(durationStr);
      setUploadState((prev) => ({
        ...prev,
        status: `Duração: ${durationStr}`,
      }));
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Upload de {uploadType.charAt(0).toUpperCase() + uploadType.slice(1)}
        </h2>

        <div className="mb-4 flex gap-4">
          <button
            onClick={() => {
              setUploadType("file");
              setMediaUrl(null);
            }}
            className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
              uploadType === "file"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Arquivo
          </button>
          <button
            onClick={() => {
              setUploadType("audio");
              setMediaUrl(null);
            }}
            className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
              uploadType === "audio"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Áudio
          </button>
          <button
            onClick={() => {
              setUploadType("video");
              setMediaUrl(null);
            }}
            className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
              uploadType === "video"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Vídeo
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Selecione um {uploadType}:
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            accept={
              uploadType === "audio"
                ? "audio/*"
                : uploadType === "video"
                ? "/video/*"
                : undefined
            }
            className="block w-full text-gray-700 bg-gray-100 rounded-lg cursor-pointer"
          />
        </div>

        {mediaUrl && (uploadType === "audio" || uploadType === "video") && (
          <div className="mb-4 p-4 bg-gray-100 rounded-lg">
            {uploadType === "audio" ? (
              <audio
                ref={mediaRef as React.RefObject<HTMLAudioElement>}
                src={mediaUrl}
                controls
                className="w-full"
                onLoadedMetadata={handleLoadedMetaData}
              />
            ) : (
              <video
                ref={mediaRef as React.RefObject<HTMLVideoElement>}
                src={mediaUrl}
                controls
                className="w-full"
                onLoadedMetadata={handleLoadedMetaData}
              />
            )}
            {duration && (
              <p className="text-sm text-gray-600 mt-2">Duração: {duration}</p>
            )}
          </div>
        )}

        <button
          onClick={handleUpload}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors w-full mb-4"
        >
          Enviar {uploadType.charAt(0).toUpperCase() + uploadType.slice(1)}
        </button>

        {uploadState.progress > 0 && (
          <div className="mb-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${uploadState.progress}%` }}
              ></div>
            </div>
          </div>
        )}

        {uploadState.status && (
          <p
            className={`text-center ${
              uploadState.status.includes("sucesso")
                ? "text-green-600"
                : uploadState.status.includes("Erro")
                ? "text-red-600"
                : "text-blue-600"
            }`}
          >
            {uploadState.status}
          </p>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
