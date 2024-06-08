import venom from "../images/main.jpg";

const Welcome = () => {
  return (
    <div className="bg-black grid grid-cols-2 w-screen h-screen text-white">
      <div className="p-10 ml-10">
        <h1 className="text-5xl text-gray-100 mt-4">Prime Videoへようこそ</h1>
        <h1 className="text-2xl mt-6">最新映画や配信情報からお楽しみください</h1>
        <button className="bg-sky-600 hover:bg-sky-500 px-4 py-3 rounded-lg mt-8">プライムビデオを観る</button>
      </div>
      <div className="mt-10 relative">
        <img
          src={venom}
          alt="Venom"
          className="rounded-lg"
          style={{ width: "50vw", height: "50vh", objectFit: "cover" }}
        />
        <div className="absolute p-5 top-0 left-0 w-full h-full flex flex-col bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-white text-6xl">Venom</h1>
          <h1 className="text-white text-3xl">New Movie</h1>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
