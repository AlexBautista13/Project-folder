"""
remove_first_and_last(list_to_clean)

html = [ '<h1>', 'Some content', '</h1>']

remove_first_and_last(html)
=> 'some content'

html_2 = [ '<h1>, 'Some content', 'more', '</h1>']

remove_first_and_last(html_2)
=> ['some content', 'more' ]

one, *two, three = [1, 2, 3, 4, 5]
"""


def remove_first_and_last(list_to_clean):
    _, *content, _ =list_to_clean
    return content

html_2 = ['<h1>', 'Some content', '</h1>']

print(remove_first_and_last(html_2))