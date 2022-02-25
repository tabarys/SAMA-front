import SearchBarAPI from '../../components/SearchBar/SearchBar';
import Banner from '../../components/Banner/Banner';
import SearchResultsCards from '../../components/Containers/Cards/SearchResultsCards';

export default function HomePage() {

    return (
        <div className='main-wrapper'>
        <Banner />
        <div className="searchBar"><SearchBarAPI /></div>
    </div>
    )
}