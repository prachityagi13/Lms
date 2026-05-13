import React from 'react'

import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CProgress,
  CTable,
  CTableHead,
  CTableHeaderCell,
  CTableBody,
  CTableRow,
  CTableDataCell,
} from '@coreui/react'

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Students',
      value: '2,450',
      progress: 75,
    },
    {
      title: 'Total Courses',
      value: '145',
      progress: 60,
    },
    {
      title: 'Assignments',
      value: '320',
      progress: 80,
    },
    {
      title: 'Active Teachers',
      value: '58',
      progress: 45,
    },
  ]

  const students = [
    {
      name: 'Rahul Sharma',
      course: 'React Development',
      status: 'Active',
    },
    {
      name: 'Priya Verma',
      course: 'UI/UX Design',
      status: 'Pending',
    },
    {
      name: 'Amit Singh',
      course: 'Node.js Backend',
      status: 'Completed',
    },
  ]

  return (
    <div className="px-3 py-3">
      <div className="mb-4">
        <h2 className="fw-bold">Learning Management Dashboard</h2>
        <p className="text-medium-emphasis">
          Welcome back! Here’s your platform overview.
        </p>
      </div>

      <CRow>
        {stats.map((item, index) => (
          <CCol md={3} key={index}>
            <CCard className="mb-4 dashboard-card">
              <CCardBody>
                <div className="text-medium-emphasis mb-2">
                  {item.title}
                </div>

                <h3 className="fw-bold mb-3">{item.value}</h3>

                <CProgress value={item.progress} />
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>

      <CRow>
        <CCol md={8}>
          <CCard className="mb-4 dashboard-card">
            <CCardBody>
              <h5 className="fw-bold mb-4">
                Recent Students
              </h5>

              <CTable hover responsive>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell>Name</CTableHeaderCell>
                    <CTableHeaderCell>Course</CTableHeaderCell>
                    <CTableHeaderCell>Status</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>

                <CTableBody>
                  {students.map((item, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell>{item.name}</CTableDataCell>
                      <CTableDataCell>{item.course}</CTableDataCell>
                      <CTableDataCell>{item.status}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol md={4}>
          <CCard className="dashboard-card">
            <CCardBody>
              <h5 className="fw-bold mb-4">
                Monthly Performance
              </h5>

              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <span>Course Completion</span>
                  <span>82%</span>
                </div>

                <CProgress value={82} className="mt-2" />
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <span>Student Engagement</span>
                  <span>68%</span>
                </div>

                <CProgress value={68} className="mt-2" />
              </div>

              <div>
                <div className="d-flex justify-content-between">
                  <span>Assignment Submission</span>
                  <span>91%</span>
                </div>

                <CProgress value={91} className="mt-2" />
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default Dashboard