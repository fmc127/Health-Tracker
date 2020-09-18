# Health-Tracker
- Mental & Physical Health tracker

# Description
- This is an application for users to track the mental & physical health of themselves and/or someone in their care. Example: Elderly, children, someone with special needs, etc... A user has the opportunity to track their day to day mental and physical health, as well as the variables and occurrences that may have attributed to their health.

## User stories

 - As an unregistered user, I would like to sign up with a email & password
 - As a registered user, I would like to sign in with an email and password
 - As a signed in user, I would like to change my password
 - As a signed in user, I would like to sign out
 - As a signed in user, I would like to create entries
     - Entries are used to track the following:
         - mental health / mood / physical pain
            - variables that could have attributed to these:
                - what did the user do that day?
                     - general day to day activities
                - who did the user encounter?
                     - did the conversations with these people go well or poorly?
                     - do these people usually have a positive or negative effect on the user's mood?
                - what did the user eat?
                     - was it healthy or unhealthy?
                     - any other factors about the food that may affect the mind/body
                - Is the user hydrated?
                     - did the user drink more, less, or an average amount of water?
                - did the user take enough time for themself this day / week?
                     - hobbies?
                     - relaxation?
                     - time with significant other?
                     - friends?
                     - exercise?
                - does the user have anything looming over their head?
                     - responsibilities?
                     - failing relationships?
                     - family problems?
                     - financial struggles?
     - changes the user wants to make to better these mental and physical feelings
     - spot for journaling
 - As a signed in user, I would like to update/edit all information in my entries
 - As a signed in user, I would like to delete my entries
 - As a signed in user, I would like my entries to be visible to me only

 // ** NOTE ** 

 I want the user to be able to select 'members' under their care which will bring up ONLY that individuals stats and logs 

 ** END NOTE ** //


## ERD

User -|--< Entries

| entry          |             |
| -------------  | ----------- |
| date *1        | date        |
| member *2      | string      |
| activities *3  | string      |
| encounters *4  | string      |
| food *5        | string      |
| water *6       | string      |
| prsnl time *7  | string      |
| looming *8     | string      |
| changes *9     | string      |
| journal *10    | string      |
| user_id        | foreign key |

*1 The date the post was made. I want this to be be searchable from a drop-down calendar type thing

*2 Is the entry about the user or their loved one?

*3 General activities that the member did that day

*4 Who did the user encounter? was it someone good or bad in their life?

*5 What did the member eat? was it something that 

*6 Water can be a drop down with "more", "average", and "less"

*8 Looming things such as: responsibilities, relationship problems, family problems, financial struggles

*9 Changes the user wants to make in order to improve themself or their routine

*10 Leave a spot for journaling with a high character max

 I WANT

- an interactive calendar where the user can select previous days to view entries on those days

- modals?