import mongoose, {Schema} from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const HotelSchema = new Schema({
      name: {type: String, required: true },
    	stars: {type: Number, required: true },
    	image: {type: String, required: true },
    	recommended: {type: Boolean, required: true },
      price: {
        amount: {type: Number, required: true },
        code: {type: String, required: true }
        }
      },{ collection : 'hotels' }
    );
HotelSchema.plugin(mongoosePaginate);
export default mongoose.model('hotel', HotelSchema);
