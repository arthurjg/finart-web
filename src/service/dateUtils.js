class DateUtils {

    static convertDate(data){
		let date = new Date(data)
		let dateStr = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
		return dateStr
	}

}
export default DateUtils;