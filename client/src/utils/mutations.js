import { gql } from '@apollo/client';

// add a note
// delete a note
// edit emotion
// edit hunger
// edit potty
// edit tired

export const ADD_NOTE = gql`
  mutation AddNote($noteText: String!, $noteId: ID!) {
    addNote(noteText: $noteText) {
      noteText
  }
`;

export const REMOVE_NOTE = gql`
  mutation RemoveNote($noteText: String!, $noteId: ID!) {
    removeNote(noteId: $noteId) {
      noteText
}
`;

export const UPDATE_PANDA = gql`
  mutation UpdatePanda($pandaEmotion: String!) {
    updatePanda(userId: $userId, pandaEmotion: $pandaEmotion) {
    pandas {
      pandaEmotion
    }
}
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {
        email
        username
        password
        pandas {
          pandaEmotion
        }
      }
    }
  }
`;
