export default function Header() {
  return (
    <nav className="h-16 flex bg-slate-600 items-center justify-between">
      <div className="flex items-center gap-4 m-4 ">
        <button>
          <img
            height={50}
            width={50}
            src="https://www.svgrepo.com/show/506800/burger-menu.svg"
            alt=""
          />
        </button>
        <img
          height={50}
          width={50}
          src="https://www.svgrepo.com/show/527754/home-1.svg"
          alt=""
        />
        <h2 className="text-white transition-transform duration-300 hover:-translate-y-1">
          Home
        </h2>
      </div>
      <img
        height={50}
        width={50}
        src="https://www.svgrepo.com/show/430940/exit-door.svg"
        alt=""
      />
    </nav>
  );
}
