import { Link } from "react-router-dom";
import prime from "../images/prime.jpg";

const CreateAccount = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={prime} className="w-52 h-36" />
            <div className="p-6 border border-gray-300 rounded-lg">
                <h1 className="text-2xl mb-4 font-medium">新規アカウント作成</h1>
                <label className="font-semibold">お名前</label>
                <input type="text" className="border mb-4 border-gray-400 text-gray-900 text-sm rounded-lg block w-80 h-9 p-2.5" placeholder="フルネーム" required />
                <label className="font-semibold">メールアドレス</label>
                <input type="text" className="border mb-1 border-gray-400 text-gray-900 text-sm rounded-lg block w-80 h-9 p-2.5" placeholder="使用可能なメールアドレス" required />
                <h1 className="text-xs text-blue-500 mb-4 cursor-pointer hover:underline hover:text-orange-400">代わりに電話番号を使用する</h1>
                <label className="font-semibold">パスワード</label>
                <input type="text" className="border border-gray-400 text-gray-900 text-sm rounded-lg block w-80 h-9 p-2.5" placeholder="最低6文字以上で入力" required />
                <button type="button" className="bg-yellow-400 mt-4 h-9 w-80 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                    アカウント作成
                </button>
                <h1 className="text-blue-500 text-xs mt-4 cursor-pointer">処理を実行するとAmazon利用規約に同意したことになります</h1>
                <h1 className="text-sm mt-4">登録されたメールアドレス宛に確認メッセージが届きますので、<br />アカウント認証を行ってください。</h1>
                <hr className="mt-4" />
                <h1 className="text-center mt-4 text-gray-400 text-sm">
                    既にアカウントを持っていますか？
                </h1>
                <Link to="/login">
                    <button className="mt-2 h-9 w-80 border shadow-lg border-gray-400 hover:bg-yellow-400 font-medium rounded-lg text-sm">
                        ログインする
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default CreateAccount
