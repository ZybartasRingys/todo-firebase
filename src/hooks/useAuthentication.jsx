/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

import { login, logout } from '../features/userSlice'
import { auth } from '../config/firebase'

export default function useAuthentication() {
  const dispatch = useDispatch()

  const signInCall = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      dispatch(login(user))
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  const signUpCall = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log(error)
    }
  }

  const logoutCall = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error)
    }
  }

  return { signInCall, logoutCall }
}
