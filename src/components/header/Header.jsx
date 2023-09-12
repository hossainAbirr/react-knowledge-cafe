import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center border-b p-4'>
                <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
                <img src={profile} alt="" />
            </div>
        </div>
    );
};

export default Header;