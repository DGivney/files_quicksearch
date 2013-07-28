<?php
if(OC::$REQUESTEDAPP == 'files') {
	OCP\Util::addScript('files_quicksearch', 'filter');
}
