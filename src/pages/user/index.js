import myx from 'tiki-miniapp-tnx/src/myx'
import { BASE_URL } from '../../utils/configs'

Page({
    onTapLogin() {
        my.getAuthCode({
            success: async (info) => {
                console.log(info)
                my.alert({
                    title: 'Notification',
                    content: 'my.getAuthCode success'
                })
                myx.debug("Success")
            },
            fail: (error) => {
                my.alert({
                    title: 'Notification',
                    content: 'my.getAuthCode error'
                })
                myx.debug("Error")
            }
        })
    },

    onGoToDebug() {
        console.log("Now going to debug page")
        my.navigateTo({
            url: '/pages/debug/index'
        })
    }
})