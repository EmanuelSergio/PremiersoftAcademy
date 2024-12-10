export default function Modal({ isOpen, onClose, item }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-96 max-h-screen overflow-y-auto">
        <h2 className="text-xl font-bold">Detalhes do Item</h2>
        <p className="mt-2">
          <strong>Nome:</strong> {item?.nome}
        </p>
        <p>
          <strong>Marca:</strong> {item?.marca}
        </p>
        <p>
          <strong>Ano:</strong> R$ {item?.ano}
        </p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
