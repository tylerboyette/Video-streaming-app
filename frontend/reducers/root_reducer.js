import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import SeriesReducer from './series_reducer';
import GenresReducer from './genres_reducer';
import SerieReducer from './serie_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  series: SeriesReducer,
  genres: GenresReducer,
  serie: SerieReducer
});

export default RootReducer;


// import {combineReducers} from 'redux';
//
// import BenchesReducer from './benches_reducer';
// import FiltersReducer from './filters_reducer';
// import SessionReducer from './session_reducer';
//
// const RootReducer = combineReducers({
//   benches: BenchesReducer,
//   filters: FiltersReducer,
//   session: SessionReducer
// });
//
// export default RootReducer;
