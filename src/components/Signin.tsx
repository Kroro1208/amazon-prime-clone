import { Link } from "react-router-dom";
import prime from "../images/prime.jpg";

const Signin = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={prime} className="w-52 h-36" />
            <div className="p-6 border border-gray-300 rounded-lg">
                <h1 className="text-2xl font-medium">Sginin</h1>
                <label className="font-semibold">メールアドレスか電話番号を入力してください</label>
                <input type="text" className="border mt-4 border-gray-800 text-gray-900 text-sm rounded-lg block w-80 h-9 p-2.5" required />
                <button type="button" className="bg-yellow-400 mt-4 h-9 w-80 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                    Continue
                </button>
                <h1 className="text-blue-500 text-xs mt-4">処理を実行するとAmazon利用規約に同意したことになります</h1>
                <h1 className="mt-4">-ヘルプが必要ですか？</h1>
            </div>
            <h1 className="text-center mt-4 text-gray-400 text-sm">
                アカウントを作成しますか？
            </h1>
            <Link to="/signup">
                <button className="mt-2 h-9 w-80 border shadow-lg border-gray-400 hover:bg-yellow-400 font-medium rounded-lg text-sm">
                    新規アカウント作成
                </button>
            </Link>
        </div>
    )
}

export default Signin
