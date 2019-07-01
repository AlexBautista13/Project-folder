class user:
  def __init__(self, email, first_name, last_name):
    self.email = email
    self.first_name = first_name
    self.last_name = last_name

  def greeting(self):
    return f'Hi {self.first_name} {self.last_name}'

class AdminUser(user):
  def active_users(self):
    return '500'


tiffany = AdminUser('tiffany@devcamp.com', 'Tiffany', 'Hudgens')

kristine = user('kristine@devcamp.com', 'kristine', 'Hudgens')

print(tiffany.active_users())
print(tiffany.greeting())
print(kristine.active_users())