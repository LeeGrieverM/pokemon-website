import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ToolBar from '../../components/ToolBar/ToolBar';

export default function InternalPage() {
    const {pokemonId} = useParams();
    const navigate = useNavigate();

  return (
    <div>
    <ToolBar/>
    Pokemon Page
    </div>
  )
}
