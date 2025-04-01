import styled from 'styled-components';

export const ListContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const AddItem = styled.div`
  display: flex;
  margin-bottom: 10px;

  input {
    flex-grow: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
  }

  button {
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const ItemList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItemStyle = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #eee;

  input[type='checkbox'] {
    margin-right: 10px;
  }

  span {
    flex-grow: 1;
  }

  button {
    padding: 4px 8px;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;