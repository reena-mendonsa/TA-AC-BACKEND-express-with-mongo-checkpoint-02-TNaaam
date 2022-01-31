var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema(
  {
    title: { type: String, required: true },
    summary: String,
    host: String,
    start_date: String,
    end_date: String,
    event_category: String,
    location: String,
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    remarks: [{ type: Schema.Types.ObjectId, ref: 'Remark' }],
  },
  { timestamps: true }
);

var Event = mongoose.model('Event', eventSchema);
module.exports = Event;