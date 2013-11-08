
var t = require('../');

describe('t', function () {
	it('should come with some predefined definitions', function () {
		var def = t.definition('de-at');
		def.should.eql({
			code: 'de-at',
			language: 'Deutsch (Österreich)',
			inherits: 'de'
		});
	});
	it('should allow defining new languages', function () {
		var def = {
			code: 'foo-bar',
			inherits: 'de',
			language: 'Foobar :-)'
		};
		t.definition(def);
		t.definition('foo-bar').should.eql(def);
		t.merge('de', {
			'Good day!': 'Guten Tag!'
		});
		t.merge('foo-bar', {
			'foobar': 'foowhat?'
		});
		t.lang('foo-bar');
		t('Good day!').should.eql('Guten Tag!');
		t('foobar').should.eql('foowhat?');
	});
	it('should support merging in multiple sets of strings', function () {
		t.merge('de', {
			'Good day!': 'Guten Tag!'
		});
		t.merge('de', {
			'How are you?': 'Wie geht es?'
		});
		t.lang('de');
		t('Good day!').should.eql('Guten Tag!');
		t('How are you?').should.eql('Wie geht es?');
	});
	it('should support inheritance', function () {
		t.merge('de', {
			'Cauliflower': 'Blumenkohl',
			'Good day!': 'Guten Tag!'
		});
		t.merge('de-at', {
			'Cauliflower': 'Karfiol'
		});
		t.lang('de-at');
		t('Good day!').should.eql('Guten Tag!');
		t('Cauliflower').should.eql('Karfiol');
	});
});

