import logo from '../assets/logo.png';

const Navber = () => {
    return (
        <nav className='mt-4'>
            <div className='container mx-auto px-4 flex justify-between'>
                <img src={logo} alt="BPL logo" />
                <ul className='flex gap-4 items-center'>
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navber;