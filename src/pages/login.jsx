export default function Login() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-xl mb-4">Login</h1>
      <input className="border p-2 w-full mb-2" placeholder="Email" />
      <input className="border p-2 w-full mb-2" placeholder="Password" type="password" />
      <button className="bg-blue-500 text-white p-2 w-full">Login</button>
    </div>
  );
}