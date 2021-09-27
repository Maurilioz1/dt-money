import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTransaction } = useTransactions();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('deposit');
    const [category, setCategory] = useState('');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            type,
            category
        });

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');

        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="close-react-modal">
                <img src={closeImg} alt="fechar modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input placeholder="Título" value={title} onChange={event => setTitle(event.target.value)} />
                <input type="number" placeholder="Valor" value={amount} onChange={event => setAmount(Number(event.target.value))} />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        isActive={type === 'deposit'}
                        activeColor='green'
                        onClick={() => { setType('deposit') }}
                    >
                        <img src={incomeImg} alt="entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        isActive={type === 'withdraw'}
                        activeColor='red'
                        onClick={() => { setType('withdraw') }}
                    >
                        <img src={outcomeImg} alt="saida" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)} />

                <button type="submit">Cadastrar</button>
            </Container>

        </Modal>
    );
}