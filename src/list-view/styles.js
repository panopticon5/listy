import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ListContainer = styled(motion.div)`
    max-width: 600px;
    margin: 40px auto;
    padding: 30px;
    background-color: #f8f8f8;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    h2 {
        text-align: center;
        margin-bottom: 30px;
        color: #333;
    }

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

export const AddItem = styled.div`
    display: flex;
    margin-bottom: 20px;

    input {
        flex-grow: 1;
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 6px;
        margin-right: 10px;
        font-size: 16px;
    }

    button {
        padding: 12px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 16px;
    }
`;

export const ItemList = styled.ul`
    list-style: none;
    padding: 0;
`;

export const ListItemStyle = styled(motion.li)`
    display: flex;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #eee;

    input[type='checkbox'] {
        margin-right: 15px;
        transform: scale(1.2);
    }

    span {
        flex-grow: 1;
        font-size: 16px;
    }

    button {
        padding: 8px 12px;
        background-color: #dc3545;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
`;

export const ShareButton = styled.button`
  padding: 12px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-top:20px;
`;