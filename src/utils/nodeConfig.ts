import {KMDConnectionParams, NodeConnectionParams} from "../packages/core-sdk/types";
import {REACT_APP_NETWORK} from "../env";
import {NETWORKS} from "../packages/core-sdk/constants";

export const supportSettings = REACT_APP_NETWORK === '';

export function getNodeConfig(): NodeConnectionParams {
    const availableNodes = getNodes();

    const network = REACT_APP_NETWORK;
    if (network) {
        if (network === NETWORKS.SANDBOX) {
            return availableNodes[0];
        }
        if (network === NETWORKS.TESTNET) {
            return availableNodes[1];
        }
    }

    const defaultNode = availableNodes[1];

    return {
        ...defaultNode,
        algod: {
            url: localStorage.getItem('algodUrl') || defaultNode.algod.url,
            port: localStorage.getItem('algodPort') || defaultNode.algod.port,
            token: localStorage.getItem('algodToken') || defaultNode.algod.token,
        },
        indexer: {
            url: localStorage.getItem('indexerUrl') || defaultNode.indexer.url,
            port: localStorage.getItem('indexerPort') || defaultNode.indexer.port,
            token: localStorage.getItem('indexerToken') || defaultNode.indexer.token,
        }
    }
}

export function getKMDConfig(): KMDConnectionParams {
    const defaultKMDConfig: KMDConnectionParams = {
        url: 'http://localhost',
        token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        port: '4002'
    };

    return {
        url: localStorage.getItem('kmdUrl') || defaultKMDConfig.url,
        port: localStorage.getItem('kmdPort') || defaultKMDConfig.port,
        token: localStorage.getItem('kmdToken') || defaultKMDConfig.token,
    }
}

export function getNodes(): NodeConnectionParams[] {
    return [
        {
            id: 'voitest',
            label: 'Voi testnet (Nodly)',
            algod: {
                url: 'https://testnet-api.voi.nodly.io',
                port: '443',
                token: '',
            },
            indexer: {
                url: 'https://testnet-idx.voi.nodly.io',
                port: '443',
                token: '',
            }
        },
        {
            id: 'voimain',
            label: 'Voi mainnet (Nodely)',
            algod: {
                url: 'https://mainnet-api.voi.nodely.dev',
                port: '443',
                token: '',
            },
            indexer: {
                url: 'https://mainnet-idx.voi.nodely.dev',
                port: '443',
                token: '',
            }
        }
    ];
}


