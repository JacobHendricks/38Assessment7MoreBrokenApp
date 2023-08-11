- BUG #1 GET users/:username does not return 404 err if not found.  Fixed in user.js
  
- BUG #2 GET users/ returns more than just basic info.
  
- BUG #3 PATCH/:username - user cannot update, only admins can
  
- BUG #4 PATCH allows you to change admin status