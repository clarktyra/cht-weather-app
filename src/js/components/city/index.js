import {connect} from 'react-redux';
import City from './city';

function mapStoreToProps(store) {
    return {
        city: store.navbar.city,
        history: store.navbar.history,
        weatherData: store.navbar.weatherData
    };
}
export default connect(mapStoreToProps)(City);