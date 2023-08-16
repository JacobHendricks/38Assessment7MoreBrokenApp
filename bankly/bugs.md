- BUG #1 Login Route Doesn't Await User.authenticate
  
- BUG #2 GET users/ returns more than just basic info.
  
- BUG #3 PATCH/:username - user cannot update, only admins can
  
- BUG #4 PATCH allows you to change admin status

- BUG #5 Deletion Always Reports Success
  
-  Super Tricky Bug #6: Auth function in middleware decode JWT, not verifies it


- BUG # GET users/:username does not return 404 err if not found.  Fixed in user.js
