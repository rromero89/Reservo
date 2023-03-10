import { put, call } from 'redux-saga/effects';

import { LoadingStatusType } from '../../types/LoadingStatus';
import { IWalletNetworkApi } from '../IWalletNetworkApi';
import * as slicesActions from '../slice';
import { BlockInfo } from '../types/BlockInfo';

export function* ActionEffectLatestBlock(walletApi: IWalletNetworkApi) {
  yield put(slicesActions.setBlockInfoLoading(LoadingStatusType.PENDING));
  yield call(HandleStateBlockRequested, walletApi);
  yield put(slicesActions.setBlockInfoLoading(LoadingStatusType.IDLE));
}

export function* HandleStateBlockRequested(
  walletNetworkApi: IWalletNetworkApi
) {
  const latestBlockNumber: number | undefined = yield call(
    walletNetworkApi.getLatestBlock
  );
  const signerAccountBalance: string = yield call(walletNetworkApi.getBalance);
  const payload: BlockInfo = {
    blockNumber: latestBlockNumber ? latestBlockNumber.toString() : '',
    signerAccountBalance: signerAccountBalance,
  };
  yield put(slicesActions.setBlockInfo(payload));
}
