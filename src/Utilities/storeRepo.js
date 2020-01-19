import store from '../store/index.js';
import _ from 'lodash';

export const storeRepo = (repo) => {
    let storedRepo = store.getState().results.storedRepo;
    let newStoredRepo = _.concat(storedRepo, [repo])
    let uniqStoreRepo = _.uniq(newStoredRepo)
    return uniqStoreRepo;
}

export const RemoveStoreRepo = (repo) => {
    let storedRepo = store.getState().results.storedRepo;
    let removeRepo = storedRepo.filter(item => item.name !== repo)
    return removeRepo;
}
