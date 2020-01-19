import store from '../store/index.js';

export const filterBooked = (keyword) => {
    let storedRepo = store.getState().results.storedRepo;
    console.log("keyword", keyword)
    let filtered = storedRepo.filter(item => item.name === keyword)

    let result = keyword === '' || keyword === undefined ? storedRepo : filtered
    return result
}