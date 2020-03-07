# Scheduleapp

This is an Appointment Scheduling Application.

<img src="demo.gif" alt="animated" />

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## How to Run ScheduleApp locally

Run `ng serve` for a dev server.

Run `node send.js` on another terminal simultaneously.

Navigate to `http://localhost:4200/`.

## How to use ScheduleApp

1) Click on Get Started you will then navigate to form page.

2) Fill the form and then click on Set Appointment to set the appointment with the client.

3) You and Client will recieve the SMS immediately after setting the appointment.

4) You will also recieve SMS Reminder 3 Hours prior to the appointment.

5) You can check all your appointments by clicking on Your Schedule and filling your email & password you used to set your appointment.

6) On clicking Delete Appointments you can delete all appointments.

### Note

ScheduleApp uses Plivo SMS Api so only after your number is registered, you will get messages after filling the Form.

Your phone number should start with 91 in the form as per the requirement of Plivo SMS Api.
(Ex:-91xxxxxxxxxx, xxxxxxxxxx is your 10 digit number)

You can Set appointment and check Your Schedule using this link https://scheduleapp-1567399660241.firebaseapp.com/Home but SMS service does not work if appointment is scheduled from this link.
