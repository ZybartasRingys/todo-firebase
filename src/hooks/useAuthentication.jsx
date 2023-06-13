/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { login, logout } from '../features/userSlice'
import { auth } from '../config/firebase'

export default function useAuthentication() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const signInCall = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      dispatch(login(user))
      navigate('/')
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
      dispatch(logout())
    } catch (error) {
      console.log(error)
    }
  }

  return { signInCall, signUpCall, logoutCall }
}
