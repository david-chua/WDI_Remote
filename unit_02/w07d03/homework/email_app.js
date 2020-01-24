PART 1:

// App information:
//
// List of service providers(ie: hotmail, yahoo, gmail);
//   - Username
//   - Contact
//   - Inbox
//   - Outbox
//   - Deleted
//   - Spam
//
//   UserName:
//   - name
//   - addresses
//     - zip, city, state,
//   - cell phone #
//   - home phone #
//   - password
//
//
//   Contact:
//   - email
//   - name
//   - cell number
//   - phone number
//   - addresses
//     - zip, city, state
//
//   Inbox
//   - date and time
//   - sender
//   - recipients
//   - read: Boolean
//
//   Outbox:
//   - sender
//   - recipients
//   - date and time
//   - sent: Boolean
//
//   Spam:
//   - sender
//   - recipients
//   - date and time
//   - sent: Boolean

  PART II:

  var Provider = {
    Name: String,
    Inbox: Array,
    Outbox: Array,
    Spam: Array,
    Deleted: Array,
    Contact: Array,
    Folders: Array
  }

  var User = {
    Username: String,
    First_Name: String,
    Last_Name: String,
    Address: String,
    City: String,
    State: String,
    Zip_Code: Number,
    Cell_number: Number,
    Home_Phone_Number: Number
  }

  var Contact = {
    First_Name: String,
    Last_Name: String,
    Email: String,
    Address: String,
    City: String,
    State: String,
    Zip: Number
    Cell_number: Number,
    Home_Phone_Number: Number,
  }

  var Inbox = {
    Name: String,
    Date: Number,
    Time: Number,
    Sender: String,
    Recipient: String,
    isRead: Boolean
  }

  var Outbox = {
    Name: String,
    Date: Number,
    Time: Number,
    Sender: String,
    Recipient: String,
    isSent: Boolean
  }
  var Spam = {
    Name: String,
    Date: Number,
    Time: Number + String,
    Sender: String,
    Recipient: String,
    isRead: Boolean
  }

  var Deleted = {
    Name: String,
    Date: Number,
    Time: Number + String,
    Sender: String,
    Recipient: String,
    isRead: Boolean
  }

  var Folder = {
    Name: String,
    Content: Array,
  }

  Part III:Example

  var Hotmail = new Provider {
    Name: Hotmail,
    UserName: [{
      Username: M_Sheeran,
      First_Name: Martyn,
      Last_Name: Sheeran,
      Address: 444 River St.,
      City: Manhattan,
      State: VA,
      Zip_Code: 22222,
      Cell_number: 5551023452,
      Home_Phone_Number: n/a
    }]
    Inbox:  []{
      Name: Target Weekly Ad,
      Date: 01-17-2017,
      Time: 7:45 PM,
      Sender: target@weekly.com,
      Recipient: M_Sheeran@hotmail.com,
      isRead: Yes
    }],
    Outbox: [{
      Name: Business Proposal,
      Date: 01-10-2017,
      Time: 11:30 AM,
      Sender: M_Sheeran@hotmail.com,
      Recipient: Rad@technologies.com,
      isSent: Yes
    }],
    Spam: [{
      Name: Get Free Money Now,
      Date: 01-14-2017,
      Time: 5:30 AM,
      Sender: Money@MTech.com,
      Recipient: M_Sheeran@hotmail.com,
      isRead: Yes
    }],
    Deleted: [{
      Name: Business Idea 2,
      Date: 01-08-2017,
      Time: 1:30 PM,
      Sender: Max_Pifer@technologies.com,
      Recipient: M_Sheeran@hotmail.com,
      isRead: Yes
    }],
    Contact: [{
      First_Name: Max,
      Last_Name: Pifer,
      Email: Max_Pifer@technologies.com,
      Address: 455 Round Ct,
      City: Alexandria,
      State: Virginia,
      Zip: 22413,
      Cell_number: 3451234524,
      Home_Phone_Number: n/a
    }]
    Folders: [{
      Name: Business Emails
    }]
  }
  }
