import Banner from '../../Components/Banner/Banner';
import './Home.css';
import Inventory from '../../Components/Inventory/Inventory';
import Features from '../../Components/Features/Features';
import TopSell from '../../Components/TopSell/TopSell';
const Home = () => {
    return (
        <div className='min-height'>
            <Banner></Banner>
            <Inventory></Inventory>
            <Features></Features>
            <TopSell></TopSell>
        </div>
    );
};

export default Home;