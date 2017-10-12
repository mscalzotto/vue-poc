import HotelCtrl from '../controller/hotel.controller';

// API Server Endpoints
const routes = (app) => {
			app.route('/api/hotels').get(HotelCtrl.search.bind(HotelCtrl));
			app.route('/api/hotels/:id').get(HotelCtrl.get);
			app.route('/api/hotels').post(HotelCtrl.create);
			app.route('/api/hotels/:id').put(HotelCtrl.update);
			app.route('/api/hotels/:id').delete(HotelCtrl.delete);
}
export default routes;
