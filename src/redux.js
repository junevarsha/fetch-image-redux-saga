// action types
const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

// reducer with initial state
const initialState = {
  fetching: false,
  dog: null,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
      break;
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, dog: action.dog };
      break;
    case API_CALL_FAILURE:
      return { ...state, fetching: false, dog: null, error: action.error };
      break;
    default:
      return state;
  }
}


// API_CALL_REQUEST says that we’re beginning the process of fetching a dog from the Dog API.

// API_CALL_SUCCESS tells the Store that we successfully retrieved a dog and are therefore no longer in the process of fetching one.

// API_CALL_FAILURE tells the Store that something went wrong with our API call. We received an error rather than a new dog.

// If successful, we’ll get a new dog and dispatch API_CALL_SUCCESS along with the dog.
// If a failure, we’ll get an error and dispatch API_CALL_FAILURE along with the error.








