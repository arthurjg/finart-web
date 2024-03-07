class DateUtils {

    static convertDate(dateParam){
		let date = new Date(dateParam)
		let dateStr = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
		return dateStr
	}

	static convertToDate(dateParam){
		let day = dateParam.substr(0, 2)
		let month = dateParam.substr(3, 2)
		let year = dateParam.substr(7, 4)

		let date = new Date(month + '/' + day + '/' + year)		
		return date
	}

}
export default DateUtils;