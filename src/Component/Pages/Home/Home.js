import Banner from '../../Components/Banner/Banner';
import useCollection from '../../Components/Hooks/useCollection';
import './Home.css';
import Product from '../../Components/product/Product';
const Home = () => {
    const [collections] = useCollection([])
    return (
        <div className='min-height'>
            <Banner></Banner>
            <div className='container'>
                <h3>Total Collection {collections.length}</h3>
                <div className="row d-flex">
                    {
                        collections.slice(0, 3).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;