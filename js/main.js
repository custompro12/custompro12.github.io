"use strict";

// Enable gem image tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// Get a jQuery ref to the active gem dropdown menu
let $activeGemDropdown = $('#active-gems')


// Sanitize the gem data
// *----- THIS SHOULD BE DONE AHT DURING SCRAPE -----* //
gemList.activeGems.forEach(gem => {
  gem.name = gem.name.replace('\'', '&#39;')
  gem.tags = gem.tags.replace('Strength', '')
  gem.tags = gem.tags.replace('Dexterity', '')
  gem.tags = gem.tags.replace('Intelligence', '')
  gem.tags = gem.tags.replace('  ', ' ')
  gem.tags = gem.tags.trim()
})
gemList.supportGems.forEach(gem => {
  //gem.name = gem.name.replace('\'', '&#39;')
  gem.tags = gem.tags.replace('Strength', '')
  gem.tags = gem.tags.replace('Dexterity', '')
  gem.tags = gem.tags.replace('Intelligence', '')
  gem.tags = gem.tags.replace('Support', '')
  gem.tags = gem.tags.replace('  ', ' ')
  gem.tags = gem.tags.trim()
})
// *----- THIS SHOULD BE DONE AHT DURING SCRAPE -----* //


// Append all of the red gem options to it
$activeGemDropdown.append('<optgroup label="Red Gems">')
gemList.activeGems.forEach(gem => {
  if (gem.color == "red") {
    $activeGemDropdown.append(`
      <option
        class="red"
        data="${gem.name + ',' + gem.tags + ',' + gem.lvl}"
        data-tokens="${gem.name + ' ' + gem.tags + ' ' + gem.lvl + ' ' + gem.color}"
        data-content='<span class="${gem.color}">${gem.name}</span>'>
      </option>
    `)
    $activeGemDropdown.data(gem.name, gem)
  }
})
$activeGemDropdown.append('</optgroup>')

// Append all of the green gem options to it
$activeGemDropdown.append('<optgroup label="Green Gems">')
gemList.activeGems.forEach(gem => {
  if (gem.color == "green") {
    $activeGemDropdown.append(`
      <option
        class="green"
        data="${gem.name + ',' + gem.tags + ',' + gem.lvl}"
        data-tokens='${gem.name + ' ' + gem.tags + ' ' + gem.lvl + ' ' + gem.color}'
        data-content='<span class="${gem.color}">${gem.name}</span>'>
      </option>
    `)
    $activeGemDropdown.data(gem.name, gem)
  }
})
$activeGemDropdown.append('</optgroup>')

// Append all of the blue gem options to it
$activeGemDropdown.append('<optgroup label="Blue Gems">')
gemList.activeGems.forEach(gem => {
  if (gem.color == "blue") {
    $activeGemDropdown.append(`
      <option
        class="blue"
        data="${gem.name + ',' + gem.tags + ',' + gem.lvl}"
        data-tokens='${gem.name + ' ' + gem.tags + ' ' + gem.lvl + ' ' + gem.color}'
        data-content='<span class="${gem.color}">${gem.name}</span>'>
      </option>
    `)
    $activeGemDropdown.data(gem.name, gem)
  }
})
$activeGemDropdown.append('</optgroup>')


// Handles updating the entire UI when the user switches active gems
$activeGemDropdown.change(eventData => {
  // Get the gem name so we can query the stored gem data
  let gemQuery = eventData.target.selectedOptions[0].attributes['data'].value.split(',')[0]
  let gem = $(eventData.target).data(gemQuery)

  // Update the tooltip of the active skill gem
  let tooltipHtml = `
    <h3>${gem.name}</h3>
    <p>
      Min level: ${gem.lvl}<br>
      <!--Sold in: Act 1 (Nessa) 1 Orb of Alteration<br>-->
      Tags: ${gem.tags}
    </p>`

  // *----- Add something to change the active gem image -----* //
  $('#active-gem-image').show()
  $('#active-gem-image').attr('data-original-title', tooltipHtml)

  // Clear out any previous support gems from the container
  $('#red,#green,#blue,#other-color').empty()

  // Update the support gem container
  let tags = gem.tags.split(' ')
  tags.forEach(tag => {
    gemList.supportGems.forEach(supportGem => {
      if ($(`#${supportGem.name.replace(/ /g, '-')}`).length === 0 && (supportGem.tags.includes(tag) || supportGem.tags === "")) {

        let gemHtml = `
          <img
            id="${supportGem.name.replace(/ /g, '-')}"
            class="gem"
            data-toggle="tooltip"
            data-html="true"
            title="
              <h3>${supportGem.name}</h3>
              <p>
                Min level: ${supportGem.lvl}<br>
                <!--Sold in: Act 1 (Nessa) 1 Orb of Alteration-->
                Tags: ${supportGem.tags===""?"Any":supportGem.tags}
              </p>"
            alt="${supportGem.name} inventory icon.png"
            src="img/gem/${supportGem.name.replace(/ /g, '_')}_inventory_icon.png">
        `
        $(`#${supportGem.color}`).append(gemHtml)
      }
    })
    
  })

  $('[data-toggle="tooltip"]').tooltip()
  $('body div div').removeClass('vertical-center');
  $('#support-container').css('display', 'inline-block');
})
