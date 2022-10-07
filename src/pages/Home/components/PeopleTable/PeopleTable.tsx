import { Person } from '@/models'
import { addFavorites } from '@/redux/states/favorites'
import { AppStore } from '@/redux/store'
import { Checkbox } from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export interface PeopleTableInterface {}

const PeopleTable: React.FC<PeopleTableInterface> = () => {
  const [selectedPeople, setSelectedPeople] = React.useState<Person[]>([])
  const pageSize = 5
  const dispatch = useDispatch()
  const statePeople = useSelector((state: AppStore) => state.people)

  /**
   * Check if the person is selected or not
   * @param person A person to find in the list of selected people
   * @returns True if the person is selected, false otherwise
   */
  const findPerson = (person: Person): boolean =>
    !!selectedPeople.find((p) => p.id === person.id)

  /**
   * Remove a person to list of selected people
   * @param person A person to remove of selected people
   * @returns A new list of selected people filtered
   */
  const filterPerson = (person: Person): Person[] =>
    selectedPeople.filter((p) => p.id !== person.id)

  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person)
      ? filterPerson(person)
      : [...selectedPeople, person]

    dispatch(addFavorites(filteredPeople))
    setSelectedPeople(filteredPeople)
  }

  const columns: GridColDef[] = [
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
      headerName: '',
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <Checkbox
            size='small'
            checked={findPerson(params.row)}
            onChange={() => handleChange(params.row)}
          />
        </>
      ),
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'category',
      headerName: 'Categories',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ]

  return (
    <DataGrid
      rows={statePeople}
      columns={columns}
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      pageSize={pageSize}
      rowsPerPageOptions={[pageSize]}
      getRowId={(row: any) => row.id}
    />
  )
}

export default PeopleTable
