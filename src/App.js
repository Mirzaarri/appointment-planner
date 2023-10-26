import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  // Define state variables for contacts and appointments
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  // Implement functions to add data to contacts and appointments
  const addContact = (name, phoneNumber, email) => {
    const newContact = { name, phoneNumber, email };
    setContacts([...contacts, newContact]);
  }

  const addAppointment = (name, contact, date, time) => {
    const newAppointment = { name, contact, date, time };
    setAppointments([...appointments, newAppointment]);
  }

  // Create a browser router and define routes
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
      <Route
        path={ROUTES.CONTACTS}
        element={<ContactsPage contacts={contacts} addContact={addContact} />}
      />
      <Route
        path={ROUTES.APPOINTMENTS}
        element={<AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment} />}
      />
    </Route>
  ));

  return (
    <RouterProvider router={router} />
  );
}

export default App;
