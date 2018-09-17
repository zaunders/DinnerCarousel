# DinnerCaruosel - a holochain app design

The main purpose of this app is to facilitate community dinners. It is meant to make the process of joining, organizing and structuring community dinners where poeple host each other in their own homes, frictionless and super easy to do.

Creating dinners for each other and conversations around dinner tables are a great way of strenghtening social bonds and getting to know people. Cooking larger but less frequent meals also free up lots of time (and is often cheaper)! Let's eat together!

---

I first started drawing a design in my journal which looked like this (I called it DinnerBingo at the time):
![DinnerCarousel paper design](https://i.imgur.com/tYDgwd5.jpg)

The basic outline is that a user can set a bunch of preferenses, create groups and add dates when the person is available.

Whenever a person **adds dates**, those are added as *tentative dates* to all groups one is a member of and when a group has reached a  minimum amount of guests for a date, a request for attendance is sent to all those tentatives. 

If enough agree, then a dinner date is set and a host is chosen by the app (based on who has been hosting **the fewest times** before). 

---

Here is an initial idea about how to structure the zomes, entries and functions needed from a Holochain perspective.

## Zome: dinnerGuest
The basic characteristics and functionality of a user of the system.

***Entries:***
**food_needs** [allergies, diet, strong dislikes]
**family**  [kids, partner, linkToOtherUser]
**accepted_dinner_start_time** [00.00-23.59]
**hosting_adress** [StreetAdress, GPS]
**min/max_group_size** [3-20]
**recommended_recipies** [good food..]
**hosting_meter*** [timesHosted - timesGuest] 
**in_groups** [list of dinner groups joined]
**available_on_date** [list of dates where available]


*HostingMeter is perhaps just implemented as a count of linked dinners where: 
(_time < today_ & _host==no_) - (_time < today_ & _host==yes_)

***Functions:***
**set_food_needs()** - *setting all food needs variables*
**set_family()** - *declaring family to toggle at dates*
**set_accepted_time()** -*setting what times dinners work, used to match/filter*
**add/remove_recipie()** - *add recipie that is available in groups "recipiebooks"*
**add/remove_dates()** - *adding a date when guest is available for hosting/joining dinner*
**join/leave_group()** - *joining a group, groups are where guests are combined into dinners*
**accept/decline_dinner_invite** - *when a match is made, guests are invited to a selected host and they can accept or decline*
**cancel_dinner** - *if guest/host needs to cancel dinner. If host cancels, that could propt other dinner guests to be host, else cancel and notify all guests*

## Zome: dinnerGroup
Basic functionality around groups, through which users are matched into dinners

***Entries:***

**geo_location_center** [Adress, GPS] - *setting a group center point to enable users to find dinners close-enough by*
**max_distance** [km/miles] - *how far from center are guests/hosts allowed to be*
**invite_only** [yes/no] - *if group is public or only available on invite*
**topic_oriented** [suggested topics] - *possibility of making groups that are focused on conversations around certain topics like, politics, travel, gender roles, or whatever, sets an intention about starting group conversations at dinner on topic*
**inexpensive_and_simple_dinners** [yes/no] - *a possible option for people who want to make sure that hosting remains easy and without prestige*
**BYOD** [yes/no] - *bring your own drinks* 
**allow_kids_or_pets** [kids, pets] - *allowing for kids and pets to come to dinners in the group*
**pot_luck_dinners** [yes/no] - *in this group dinners are not prepared soly by host but are a combination of whatever food guests bring*

**dinner** [date/time, host, guest_list, accepted] - *a dinner event, first sent out as tentative, then changed to accepted*

***Functions:***

**create/delete_tentative_dinner()** - *triggered when enough people in group have set the same date, sends out invitations (including host location)*
**create_accepted_dinner()** - *triggered when enough people accepted invitation*


---


## Additional design considerations
Around the concept of dinnerGroups I am not sure how to handle these entries as they are not agents but a sectioning off of agents in the system. I suppose that a way to handle this is to handle them the same way that groups will be handled in [HoloChat](https://github.com/holochain/holochat). There groups are handled as seperate applications if I understand it correctly where specifics of the group is set in the app dna. Not knowing how to do this I set it up as a seperate Zome with functions. 

One thing that could be added is to have a *"familiarity slider"* which tries to match people with other people they know or do not know based on previous dinners, social connections (bridging with other apps) and preferred setting on the slider.

Another addition could be a *"happy to Host"* setting that up-regulate how often people that like to host, get to host dinners.

So long as user location and group center location is available as GPS (long, lat) coordinates, [math-calculations](http://www.movable-type.co.uk/scripts/latlong.html) can determine if user is within accepted range of group.


---

## UX flow
From the users perspective the app would prompt the user on first install to fill in personal preferenses and settings.

The main interaction surfaces would be: 
* a user settings page including "join group" and "create new group" buttons
* a view for adding dates (a calendar that also includes accepted and tentative dinners)
* a dialog for accepting invitations for dinners
* a dinner details view showing: date/time, host location, food needs of guests, number of guests, extra kids/pets, Pot Luck (y/n), BYOD (y/n), Inexpensive (y/n), Topics: ... and "cancel dinner" button for unforseen events. 
* a group settings page
