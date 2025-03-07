/*!
 * ui-grid - v4.5.0 - 2018-06-15
 * Copyright (c) 2018 ; License: MIT 
 */

(function () {
  angular.module('ui.grid').config(['$provide', function($provide) {
    $provide.decorator('i18nService', ['$delegate', function($delegate) {
      $delegate.add('ta', {
        aggregate: {
          label: 'உருப்படிகள்'
        },
        groupPanel: {
          description: 'ஒரு பத்தியை குழுவாக அமைக்க அப்பத்தியின் தலைப்பை இங்கே  இழுத்து வரவும் '
        },
        search: {
          placeholder: 'தேடல் ...',
          showingItems: 'உருப்படிகளை காண்பித்தல்:',
          selectedItems: 'தேர்ந்தெடுக்கப்பட்ட  உருப்படிகள்:',
          totalItems: 'மொத்த உருப்படிகள்:',
          size: 'பக்க அளவு: ',
          first: 'முதல் பக்கம்',
          next: 'அடுத்த பக்கம்',
          previous: 'முந்தைய பக்கம் ',
          last: 'இறுதி பக்கம்'
        },
        menu: {
          text: 'பத்திகளை தேர்ந்தெடு:'
        },
        sort: {
          ascending: 'மேலிருந்து கீழாக',
          descending: 'கீழிருந்து மேலாக',
          remove: 'வரிசையை நீக்கு'
        },
        column: {
          hide: 'பத்தியை மறைத்து வை '
        },
        aggregation: {
          count: 'மொத்த வரிகள்:',
          sum: 'மொத்தம்: ',
          avg: 'சராசரி: ',
          min: 'குறைந்தபட்ச: ',
          max: 'அதிகபட்ச: '
        },
        pinning: {
         pinLeft: 'இடதுபுறமாக தைக்க ',
          pinRight: 'வலதுபுறமாக தைக்க',
          unpin: 'பிரி'
        },
        gridMenu: {
          columns: 'பத்திகள்:',
          importerTitle: 'கோப்பு : படித்தல்',
          exporterAllAsCsv: 'எல்லா தரவுகளையும் கோப்பாக்கு: csv',
          exporterVisibleAsCsv: 'இருக்கும் தரவுகளை கோப்பாக்கு: csv',
          exporterSelectedAsCsv: 'தேர்ந்தெடுத்த தரவுகளை கோப்பாக்கு: csv',
          exporterAllAsPdf: 'எல்லா தரவுகளையும் கோப்பாக்கு: pdf',
          exporterVisibleAsPdf: 'இருக்கும் தரவுகளை கோப்பாக்கு: pdf',
          exporterSelectedAsPdf: 'தேர்ந்தெடுத்த தரவுகளை கோப்பாக்கு: pdf',
          clearAllFilters: 'Clear all filters'
        },
        importer: {
          noHeaders: 'பத்தியின் தலைப்புகளை பெற இயலவில்லை, கோப்பிற்கு தலைப்பு உள்ளதா?',
          noObjects: 'இலக்குகளை உருவாக்க முடியவில்லை, கோப்பில் தலைப்புகளை தவிர தரவு ஏதேனும் உள்ளதா? ',
          invalidCsv:	'சரிவர நடைமுறை படுத்த இயலவில்லை, கோப்பு சரிதானா? - csv',
          invalidJson: 'சரிவர நடைமுறை படுத்த இயலவில்லை, கோப்பு சரிதானா? - json',
          jsonNotArray: 'படித்த கோப்பில் வரிசைகள் உள்ளது, நடைமுறை ரத்து செய் : json'
        },
        pagination: {
          sizes		: 'உருப்படிகள் / பக்கம்',
          totalItems	: 'உருப்படிகள் '
        },
        grouping: {
          group	: 'குழு',
          ungroup : 'பிரி',
          aggregate_count	: 'மதிப்பீட்டு : எண்ணு',
          aggregate_sum : 'மதிப்பீட்டு : கூட்டல்',
          aggregate_max	: 'மதிப்பீட்டு : அதிகபட்சம்',
          aggregate_min	: 'மதிப்பீட்டு : குறைந்தபட்சம்',
          aggregate_avg	: 'மதிப்பீட்டு : சராசரி',
          aggregate_remove : 'மதிப்பீட்டு : நீக்கு'
        }
      });
      return $delegate;
    }]);
  }]);
})();
