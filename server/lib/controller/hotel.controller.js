import Hotel from '../models/hotel'

class HotelController {

  constructor() {
  }

  create(req, res) {
    const newHotel = new Hotel(req.body);
    newHotel.save((err, hotel) => {
      if (err) {
        res.send(err);
      }
      res.json(hotel);
    });
  }
  createQuery(query){
    let newQuery=[];
    if(query.name){
      newQuery.push({name : new RegExp(query.name.toLowerCase(), 'i')});
    }
    if(query.star){
      newQuery.push({stars : { $in: query.star.split(',').map(Number) }});
    }
    if(query.price_range){
      let range = query.price_range.split('-').map(Number);
      newQuery.push({"price.amount" : { $gt : range[0], $lt: range[1]}});
    }
    return newQuery.length > 0 ?{$and: newQuery} :{};
  }
  /** getAll function to find Hotels  */
  search(req, res) {
    let query = this.createQuery(req.query);
    let options = this.getOptions(req);
    Hotel.paginate(query,options, function(err, result) {
      if (err) {
        res.statusCode = 404;
        return res.json({errors: ['Could not retrieve hotels']});
      }
      return res.json(result);
    });
  }
  getOptions(req) {
    let offset = parseInt(req.query.offset, 10);
    if (Number.isNaN(offset) || offset < 1) {
      offset = 0;
    }
    let limit = parseInt(req.query.limit, 10);
    if (Number.isNaN(limit)) {
      limit = 20;
    } else if (limit > 50) {
      limit = 50;
    } else if (limit < 1) {
      limit = 20;
    }
    return {limit, offset}
  }
  /** getHotel function to get Hotel by id. */
  get(req, res) {
    Hotel.findOne({_id: req.params.id}, function(err, result) {
      if (err) {
        return res.send(err);
      }
      return res.json(result);
    });
  }

  /** updateHotel function to get Hotel by id. */
  update(req, res) {
    Hotel.update(req.params.id, req.body, function(err, result) {
      if (err) {
        return res.send(err);
      }
      return res.json(results);
    });
  }

  /** removeHotel function to get Hotel by id. */
  delete(req, res) {
    Hotel.remove({_id: req.params.id}, function(err, result) {
      if (err) {
        return res.send(err);
      }
      return res.json(results);
    });
  }
}
export default new HotelController();
