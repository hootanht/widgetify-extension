import { useGeneralSetting } from '@/context/general-setting.context'
import { PetSettings } from './components/pet-settings'
import { PrivacySettings } from './components/privacy-settings'
import { SelectCity } from './components/select-city'
import { TimezoneSettings } from './components/timezone-settings'

export function GeneralSettingTab() {
	const {
		analyticsEnabled,
		setAnalyticsEnabled,
		enablePets,
		setEnablePets,
		selectedPets,
		setSelectedPets,
		petNames,
		setPetName,
		timezone,
		setTimezone,
	} = useGeneralSetting()

	return (
		<div className="w-full max-w-xl mx-auto">
			<SelectCity key={'selectCity'} />
			<TimezoneSettings key="timezone" timezone={timezone} setTimezone={setTimezone} />
			<PrivacySettings
				key="privacy"
				analyticsEnabled={analyticsEnabled}
				setAnalyticsEnabled={setAnalyticsEnabled}
			/>
		<PetSettings
			key="pets"
			enablePets={enablePets}
			setEnablePets={setEnablePets}
			selectedPets={selectedPets}
			setSelectedPets={setSelectedPets}
			petNames={petNames}
			setPetName={setPetName}
		/>
		</div>
	)
}
