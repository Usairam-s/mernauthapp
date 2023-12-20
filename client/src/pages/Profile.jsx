import {useSelector} from "react-redux"

const Profile = () => {
  const {currentUser} = useSelector((state)=>state.user)
  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className="flex flex-col gap-4">
        <img src={currentUser.profilePicture} alt="profilePicture" className="h-24 w-24 object-cover self-center rounded-full mt-2" />

        <input defaultValue={currentUser.username} type="text" id="username" placeholder="Username" className="bg-slate-100 rounded-lg p-3" />
        <input defaultValue={currentUser.email} type="email" id="email" placeholder="Email" className="bg-slate-100 rounded-lg p-3" />
        <input type="password" id="password" placeholder="Password" className="bg-slate-100 rounded-lg p-3" />
        <button className="bg-slate-700 uppercase text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80">update</button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
    </div>
  )
}

export default Profile