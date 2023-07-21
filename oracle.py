import json
import os
from dotenv import load_dotenv
from web3 import Web3


'''config information'''
owner_private_key_dir = os.path.dirname(os.getcwd()) + r'\.env'
load_dotenv(owner_private_key_dir)

siberium_url = 'https://rpc.test.siberium.net'
# Create the node connection
w3 = Web3(Web3.HTTPProvider(siberium_url))

token_address = '0xd5e552dD8507c6cBaDD468f866A9Ad8a704ae669'
abi_dir = os.getcwd() + r'\\artifacts\\contracts\\CoffeeToken.sol'
abi_data = json.loads(open(abi_dir + '\\CoffeeToken.json').read())['abi']
token_contract = w3.eth.contract(address=token_address, abi=abi_data)
token_pool = token_contract.functions

owner_private_key = os.environ.get('PRIVATE_KEY')
owner_address = 


def mint_nft(to, id):
    transaction = token_pool.safeMintNFT(to, id).build_transaction({
        'gas': 100000,
        'gasPrice': w3.to_wei('1', 'gwei'),
        'from': owner_address,
        'nonce': w3.eth.get_transaction_count(owner_address),
        'value': w3.to_wei(0.01, 'ether'),
    })

    signed_txn = w3.eth.account.sign_transaction(transaction, private_key=owner_private_key)
    send_tx = w3.eth.send_raw_transaction(signed_txn.rawTransaction)
    tx_receipt = w3.eth.wait_for_transaction_receipt(send_tx)
    print(tx_receipt)


def get_balance(to):
    nft_amount = token_pool.balanceOf(to).call()
    print(nft_amount == 1)


def main():
    to = '' # попробуй вставить свой адрес
    id = 1  # nft id, всё равно какой, главное чтоб не повторялось
    mint_nft(to, id)
    get_balance(to)


if __name__ == '__main__':
    main()
