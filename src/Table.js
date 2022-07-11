import React from 'react'

export default function Table({data}) {
  return (
      <table>
          <tbody>
              <tr>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Email</th>
              </tr>
              {
                  data.map(item => <tr key={item.id}>
                      <td>{ item.first_name}</td>
                      <td>{ item.last_name}</td>
                    <td>{ item.email}</td>
                </tr>)
              }
              
          </tbody>
          <style jsx="true">{`
          table{
            display:flex;
            width:100%;
            justify-contents: space-between;

          }
          ` }</style>
    </table>
  )
}
