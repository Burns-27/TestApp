# Basics

complexity levels highest to lowest

1. app
2. Form
3. fieldsets
4. base components

## App

Start with Tech selection (way to make this Remembered?), date, and Notes type selector. From Notes type, decide what form is rendered.

## Form

each form will have the states that are used to decide what fieldsets to show, and the logic for rendering said fieldsets

## Fieldsets

will take states from the form, and render the individual components required based on state, this is where base components will get names and basic values
will also host the validity testing logic.

## Base Components

the basic buiding blocks, hosting the styling and specific attributes of the components

# Inventory CheckIn/Out Form

form for our guys to use that lets them input the contractor(if there is one), the date, if they are adding or removing items, what items, how many, and a photo of each.

## Inputs

- Tech
- for Contractor
  - contractor
- in or out
- date
- inventory item
  - item description
  - quanty
  - photo
- reel
  - reel number
  - leaving sequential
  - photo

### Tech (Used in all forms)

A selector with options for all techs, on selection of an option, needs to change the Name and email for the tech to match selected Tech.

### For Contractor

A 2 option radio to say if the items removed/added were done for a contractor, if yes, add in a text input to declare what contractor.

### In/Out

A 2 option radio to choose if bringing into inventory or taking out
result to go into subject line

### Date (all forms)

what is says on the tin, with restriction to not be a future date,
result to go into subject line

### Inventory Item (all forms)

A field that contains a + button, to render an additional item and the following components
a Text input for the Item, and a number input for the quantity, along with a file input for adding a photo.

### Reel (Damage Investigation and Inventory)

nearly identical set up to inventory Item, except it will have reel number and leaving sequential for the labels.

# Closing Notes Form

## Sections

- ticket type
- Customer Info
- Additional Techs
- Plant Info
- Notes
- Ont
- Modem
- Materials
- Verification
- Forms

Only Give Ont if Fiber is selected
only Give Modem If internet is selected.

### Ticket type

- ticket type
- Service type
- DT
- Internet

### Customer info

- Name
- Address

### Plant Info

- CP
- Port
- Ped
- LCE
- Fiber Number
- CPots

Based on Service type (Fiber/DSL) include CP vs Fiber Number, If DT is selected for LCE and if DT and Fiber Cpots

### Notes

- Notes
- Issue
- Solution

Based on Ticket type, TT vs Service Order, give issue/solution vs Notes

### Ont

# Damage investigations

## sections

- location
- plant
- damaging party
- locates
- Repair
- summary

## inputs

- date of damage
- address or Street & Cross street or GPS Cords
- ped/ ped stretch
- cable type
- cable count
- contractor
- contact number
- locates
- mokan refreshed locates
- repaired on site?
- repaire required
- site map
- materials used
- summary
- photo

### Event Information

- Date of damage
  - same day or date input
- Location
  - street
  - cross street
  - revenue area

## Plant

- cable damaged
  - type and count
- drop
  - ped
- mainline
  - ped span

## Contractor/Responsibile part

- who did the damage
- contact number

## Locates

- locates present when arrived at the scene
  - photo of locates with distance from damage
- Refreshed locates while on site
  - photo of refreshed locates compared to existing

## Repair

- is repair required?
  - Able to repair on site?
    - Materials used to repair
  - Temporary repair done
    - notice to turn in site map for repair

## Summary

- Summary of damage event
- Photos from scene
  - explanation of photos to get.
