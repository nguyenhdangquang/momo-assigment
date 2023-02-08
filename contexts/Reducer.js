export function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_SOCIAL_PAGE': {
      return {
        ...state,
        socialDetailPageData: action.payload,
      };
    }
  }
}
